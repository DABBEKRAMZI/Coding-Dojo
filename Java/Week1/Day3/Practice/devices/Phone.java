
public class Phone extends Device {

	public Phone() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Phone(int batterie) {
		super(batterie);
		// TODO Auto-generated constructor stub
	}
	
	
	public void makeCall () {
		
		setBatterie(getBatterie()-5);
		
	}
	
	public void playGame () {
		
		setBatterie(getBatterie()-20);
		
	}
	public void charge () {
	if (getBatterie()+50 <100)setBatterie(getBatterie()+50);
	else setBatterie(100);
	
	
	}
	
	
	

}
