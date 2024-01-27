import java.util.ArrayList;
public class Test {
    public static void main (String[] args){
        Item Pizza = new Item("pizza",10);
        Item Burger = new Item("burger",15);
        Item Sandwich = new Item("sandwich",8.5);
        Item Pepsi =new Item("pepsi",5.8);
        Item Icecream= new Item("icecream",2.5);
        Order order1=new Order();
        Order order2=new Order();
        Order Ramzi=new Order("Ramzi");
        Order Barhoum=new Order("Barhoum");
        Order Lin=new Order("Lin");
        order1.addItem(Pizza);
        order1.addItem(Pepsi);
        order2.addItem(Burger);
        order2.addItem(Icecream);
        Ramzi.addItem(Pizza);
        Ramzi.addItem(Sandwich);
        Ramzi.addItem(Pepsi);
        Barhoum.addItem(Pizza);
        Barhoum.addItem(Burger);
        Barhoum.addItem(Icecream);
        Lin.addItem(Pepsi);
        Lin.addItem(Icecream);
        order1.getStatusMessage();
        order2.getStatusMessage();
        Barhoum.getStatusMessage();
        order1.setReady(true);
        order2.setReady(true);
        Barhoum.setReady(true);
        order1.getStatusMessage();
        order2.getStatusMessage();
        Barhoum.getStatusMessage();
        System.out.println(Ramzi.getOrderTotal());
        System.out.println(Lin.getOrderTotal());
        System.out.println("**********************");
        order1.display();
        System.out.println("**********************");
        order2.display();
        System.out.println("**********************");
        Ramzi.display();
        System.out.println("**********************");
        Barhoum.display();
        System.out.println("**********************");
        Lin.display();
        System.out.println("**********************");





    }
}