import java .io.*;
import java .util.*;
public class Solution{
  public static final String alpha="abcdefghijklmopqrstuvwxyz";
  public static String Encrypt(String message, int shifKey){
    message= message.toLowerCase();
    String cipherText="";
    for(int i=0;i<message.length();i++){
      int charPosition=alpha.indexOf(message.charAt(i));
      int keyVal= (shifKey + charPosition)%26;
      char replacVal=alpha.charAt(keyVal);
      cipherText+=replacVal;
    }
    return cipherText;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String message=new String();
    int key=0;
    System.out.println("Enter the string for encryption: ");
    message=sc.next();
    System.out.println("Enter the shift key: ");
    key=sc.nextInt();
    System.out.println("Encrypted message is: "+Encrypt(message, key));
  }
}