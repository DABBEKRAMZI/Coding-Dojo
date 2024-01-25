import java.util.ArrayList;
import java.util.Random;

public class Puzzling {

    Random randMachine = new Random();

    public ArrayList getRolls(){

        ArrayList<Integer> res =new ArrayList<Integer>();
        for (int i=0 ; i<10; i++){
            res.add(randMachine.nextInt(20)+1);
        }
        return res;

    }
    
    public char getRandomLetter(){
       
        // ArrayList<String> lettres= new ArrayList<String>();
        char[] lettres={'A','Z','E','R','T','Y','U','I','O','P','Q','S','D','F','G','H','J','K','L','M','W','X','C','V','B','N'};
        return lettres[(randMachine.nextInt(25))];

    }

    public String getPassword (){
        String res="";
        for(int i=0;i<8; i++ ){
            res += getRandomLetter();
        }
        return res;

    }

    public ArrayList<String> getNewPasswordSet(int b){
        ArrayList<String> passwords= new ArrayList<String>() ;
        for (int i=0;i<b;i++){
            passwords.add(getPassword());
        }
        return passwords;

    }


}