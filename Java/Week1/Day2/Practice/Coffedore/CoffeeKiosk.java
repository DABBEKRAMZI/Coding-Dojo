import java.util.ArrayList;
public class CoffeeKiosk{
    
    private ArrayList<Item> menu;
    private ArrayList<Order> orders;

    public CoffeeKiosk(){
        this.menu=new ArrayList<>();
        this.orders=new ArrayList<>();

    }
    public void addMenuItem(Item item){
        this.menu.add(item);
    }
    public void displayMenu(){
        for (int i=0; i<this.menu.size(); i++){
            System.out.println(i+" "+this.menu.get(i).getName()+" -- $"+this.menu.get(i).getPrice());
            }

    }
        public void newOrder() {
        
    	// Shows the user a message prompt and then sets their input to a variable, name
        System.out.println("Please enter customer name for new order:");
        String name = System.console().readLine();
    
    	// Your code:
        // Create a new order with the given input string
        this.orders.add(new Order(name));
        // Show the user the menu, so they can choose items to add.
        displayMenu();
    	// Prompts the user to enter an item number
        System.out.println("Please enter a menu item index or q to quit:");
        String itemNumber = System.console().readLine();
        
        // Write a while loop to collect all user's order items
        while(!itemNumber.equals("q")) {
            
            // Get the item object from the menu, and add the item to the order
            this.orders.get(this.orders.size()-1).addItem(this.menu.get(Integer.parseInt(itemNumber)));

            // Ask them to enter a new item index or q again, and take their input
            System.out.println("enter a new item index or q to quit:");
            itemNumber = System.console().readLine();
        }
        // After you have collected their order, print the order details 
        this.orders.get(this.orders.size()-1).display();
    }
    public void addMenuItemByInput(){

        System.out.println("Please enter item name :");
        String item = System.console().readLine();
        System.out.println("Please enter the price for item:");
        String price = System.console().readLine();

        addMenuItem(new Item(item,Double.parseDouble(price)));

    }

}