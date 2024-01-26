import java.util.ArrayList;
public class Test {

    public static void main (String[] args){
        Gorilla g1=new Gorilla();
        Bat B1=new Bat();
        g1.displayEnergy();
        g1.eatBananas();
        g1.displayEnergy();
        g1.throwSomething();
        g1.displayEnergy();
        g1.climb();
        g1.displayEnergy();
        System.out.println("*****************************");
        B1.displayEnergy();
        B1.fly();
        B1.displayEnergy();
        B1.eatHumans();
        B1.displayEnergy();
        B1.attackTown();
        B1.displayEnergy();

}




    
}