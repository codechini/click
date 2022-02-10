import java.io.*;  
import java.net.*;  
public class chatclients {  
	static String availableClients[]=new String[10];
	static int totalclients = 0;
	public static void main(String[] args) {  
	String clientname="";
	String name ="";
	String msg="";
	try{      
		clientname = p_input("Enter your name");
		Socket s=new Socket("4.tcp.ngrok.io",18093);
		DataOutputStream dout=new DataOutputStream(s.getOutputStream());  
		DataInputStream din = new DataInputStream(s.getInputStream());
		
		msg=clientname+"~";
		dout.writeUTF(msg);
		Thread.sleep(1000);
		Thread t = new Thread(new clientReceiveThread(din));
		t.start();
		Thread.sleep(1000);
		int num =0;
		while(true){
			msg="select the option to msg ->";
			for(num=0;num<totalclients;num++){msg+=availableClients[num]+"-"+num+"  ";}
			msg+="close-10";
			num=Integer.parseInt(p_input(msg));
			if(num<totalclients & num>-1){msg=p_input("Enter Message->");}
			else if(num==10){break;}
			else {System.out.println("select correct option please :)");continue;}
			msg = availableClients[num]+"`"+msg+"~";
			dout.writeUTF(msg);
		}
		dout.close();
		s.close();  
	}catch(Exception e){System.out.println(e);}  
	}
	
	static String p_input(String info){
	System.out.print(info+" ->") ;
	String data ="" ;
	char word ;
	try {
		while(true){
			word =(char) System.in.read();
		 	if(word==10)break;
		 	data += word;}
	}
	catch(Exception err){err.printStackTrace();}
	return data;
	}
}

class clientReceiveThread implements Runnable{
	
	int dataint ;
	int startbyte=0;
	boolean keystr =true;
	String from="",msg="",name="";
	DataInputStream din ;
	clientReceiveThread(DataInputStream din){this.din = din;}
	public void run(){
		int no_of_clients =0;
		try{
		while((dataint=din.read())!=-1){
		//System.out.print((char)dataint);
		if(startbyte<2){startbyte++;continue;}
		else if(dataint==126){
			System.out.println("\nFrom -"+from+" message ->"+msg);
			if(from.equals("server")){
				name="";chatclients.totalclients=no_of_clients;no_of_clients=0;
			}
			from="";msg="";startbyte=0;keystr=true;
			
		}
		else if(dataint!=96&keystr){from+=(char)dataint;}
		else if(dataint!=96&from.equals("server")){
			msg+=(char)dataint;
			if(dataint!=44){name+=(char)dataint;}
			else if(dataint==44){chatclients.availableClients[no_of_clients]=name;name="";no_of_clients++;}
		}
		else if(dataint!=96){msg+=(char)dataint;}
		else if(dataint==96){keystr=false;}
		}
		din.close();
		System.out.print("Connection with server closed");
		}catch(IOException e){System.out.println("An error occured while reading ");}
	}
}
