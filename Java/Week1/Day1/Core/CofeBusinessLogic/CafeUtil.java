import java.util.ArrayList ;
public class CafeUtil {

    public int getStreakGoal(){
        int sum=0;
        for (int i=0;i<=10;i++) sum+=i ;
        return sum;
    }
    public double getOrderTotal(double[] prices){
            double sum= 0 ;
            for (double price : prices) sum+= price ;
            return sum ;
    }
    public void displayMenu(ArrayList<String> menuItems){
        
        for (int i=0;i<menuItems.size();i++){
            System.out.println(i+" "+menuItems.get(i));
        }
        
    }
    public void addCostumer(ArrayList<String> customer){
        System.out.println("Please enter your name:");
        String username = System.console().readLine();
        customer.add(username);
        System.out.println("hello, "+username+" here!");

        System.out.println(customer);


    }
    public 
void printPriceChart(String product, double price, int maxQuantity){
    System.out.println(product);
    for(int i=0;i<maxQuantity;i++){
        System.out.println(i+1 +" - $"+ (i+1)*price);
    }
}

}