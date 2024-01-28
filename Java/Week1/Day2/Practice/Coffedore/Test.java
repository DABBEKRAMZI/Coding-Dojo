import java.util.ArrayList;
public class Test {
    public static void main (String[] args){
       Item latte = new Item("latte",10);
        Item water = new Item("water",15);
        Item cappuccino = new Item("cappuccino",8.5);
        Item mocha =new Item("mocha",5.8);
        CoffeeKiosk LinBarhoum=new CoffeeKiosk();
        LinBarhoum.addMenuItem(latte);
        LinBarhoum.addMenuItem(water);
        LinBarhoum.addMenuItem(cappuccino);
        LinBarhoum.addMenuItem(mocha);
        LinBarhoum.addMenuItemByInput();
        LinBarhoum.newOrder();




    }
}