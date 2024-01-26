public class Gorilla extends Mammal {
    public  Gorilla(int energy){
        super(energy);
        
        
        // super.getEnergy(energy);
    }
     public  Gorilla(){
        super();
    }
    public void throwSomething(){
       setEnergy(getEnergy()-5 );
        System.out.println("the gorilla has thrown something");
    }

    public void eatBananas(){
        setEnergy(getEnergy()+10) ;
        System.out.println("the gorilla's satisfaction");
    }

    public void climb(){
        setEnergy(getEnergy()+10);
        System.out.println("the gorilla has climbed a tree");
    }



} 