import java.util.ArrayList ;
public class TestCafe {

    public static void main(String[] args){

        CafeUtil test =new CafeUtil();

        System.out.println("******"+test.getStreakGoal());

        // double[] orders ={5.6,3.8,4.5,8.6};
        // System.out.println("======> "+ test.getOrderTotal(orders));
        System.out.println("======> " + test.getOrderTotal(new double[]{5.6, 3.8, 4.5, 8.6}));

        ArrayList<String> menu = new ArrayList<String>();
        menu.add("drip coffe");
        menu.add("cappuccino");
        menu.add("latte");
        menu.add("mocja");
        test.displayMenu(menu);
        // System.out.println("<______________________________>"+menu);

        // ArrayList<String> customer = new ArrayList<String>();
        // test.addCostumer(customer);
        // test.addCostumer(customer);
        // test.addCostumer(customer);
        
        test.printPriceChart("Express",1.1,4);

    }
    
}