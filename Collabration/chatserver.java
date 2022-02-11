import java.io.*;  
import java.net.*;
public class chatserver {
	public static void main(String[] args)  {  
		try{
			int maxclient = 10;
			int client =0 ;
			ServerSocket ss=new ServerSocket(14325);  
			Socket connarr[] = new Socket[maxclient] ;
			
			servingThread ST = new servingThread(connarr);
			Thread athread ;
			while(maxclient>0){
				connarr[client]=ss.accept();
				System.out.println("got new client");
				if(servingThread.totalavailableclient- servingThread.clientconnected!=0){Thread.sleep(3);}
				servingThread.totalavailableclient++;
				athread = new Thread(ST);
				athread.start();
				//while(athread.isAlive()){Thread.sleep(3);}
				Thread.sleep(10);
				client++;
				maxclient--;
			}
			ss.close();  
		}catch(Exception e){System.out.println(e);}
	}
}

class servingThread implements Runnable{

	static int totalavailableclient =0;
	static int clientconnected = 0 ;
	static Socket clientCon[] ;
	static String clientNames[] =new  String[10] ;
	static DataOutputStream dot[]=new DataOutputStream[10] ;
	static DataInputStream  din[]=new DataInputStream[10] ;	
	servingThread(Socket cc[]){clientCon = cc;}
	servingThread(){}

	public void run() {	
		if(true){
			try{
			dot[clientconnected]= new DataOutputStream(clientCon[clientconnected].getOutputStream()) ;
			din[clientconnected]= new DataInputStream(clientCon[clientconnected].getInputStream()) ;
			Thread cthread= new Thread(new clientThreads(clientconnected)) ;
			cthread.start();
			String msg="server`";
			if(totalavailableclient-clientconnected!=0)Thread.sleep(2);
			for(int j =0 ;j<clientconnected;j++){msg+=clientNames[j]+",";} msg+="~";
			for(int i =0 ;i<clientconnected;i++){dot[i].writeUTF(msg);dot[i].flush();}
			}
			catch(IOException e){System.out.print("An error occured in serving thread at client "+totalavailableclient+"\n"+e);}
			catch(InterruptedException ie){System.out.print("An error occured in serving thread at client "+totalavailableclient+"\n"+ie);}
		}
	}
}
class clientThreads implements Runnable{
	int client_no =-1;
	clientThreads(int num){client_no = num ;}
	public void run(){
		int dataint  ;
		int loop_var ;
		boolean client_registered =false ,keystr=true ;
		String outdata ="";
		String usrdata ="";
		String sendtoname="";
		String clientname = "";
		int byteread =0;
		if(client_no!=-1){
		try{
			while( (dataint =servingThread.din[client_no].read() ) !=126){
				System.out.print(dataint+"  ");
				if(byteread<2){byteread++;continue;}
				clientname +=(char)dataint;
			}
			byteread=0;
			servingThread.clientNames[client_no]=clientname ;
			servingThread.clientconnected++; 
			System.out.println("Connected with ->"+clientname);
			while( ( dataint =servingThread.din[client_no].read() ) !=-1) {
				if(dataint==126){
					keystr=true ;
					System.out.print("going to send data -");
					byteread=0;
					for(loop_var = 0 ; loop_var < servingThread.clientconnected;loop_var++){
						System.out.print("\nin loop-"+loop_var+servingThread.clientNames[loop_var]+"="+sendtoname);//test
						if(servingThread.clientNames[loop_var].equals(sendtoname) ){
							System.out.println(servingThread.clientNames[loop_var].equals(sendtoname));//test
							outdata = servingThread.clientNames[client_no]+"`"+usrdata+"~";
							System.out.println("writing"+outdata+"to"+servingThread.clientNames[client_no]);//test
							servingThread.dot[loop_var].writeUTF(outdata);servingThread.dot[loop_var].flush();
							sendtoname="";usrdata="";
						}
					}
				}
				else if(byteread<2){byteread++;continue;}
				else if(dataint==96){
					System.out.println();//testing
					keystr=false ;
				}
				else if(dataint!=96 & keystr){
					System.out.print(dataint+" "+(char)dataint);//testing
					sendtoname += (char)dataint ;
				}
				else if(dataint!=96 ){
					System.out.print((char)dataint);//testing
					usrdata += (char)dataint ;					
				}
			}
		}catch(IOException e ){System.out.println("An error occured in client thread "+(client_no+1)+"\n"+e);}
		}
	}
}
