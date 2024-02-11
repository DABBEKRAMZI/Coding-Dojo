package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class AdminUser extends User implements HIPAACompliantUser, HIPAACompliantAdmin {
	private Integer employeeID;
    private String role;
    private ArrayList<String> securityIncidents;
    
    // TO DO: Implement a constructor that takes an ID and a role
  
    public AdminUser(Integer employeeID, String role, ArrayList<String> securityIncidents) {
		super();
		this.employeeID = employeeID;
		this.role = role;
		this.securityIncidents = new ArrayList<String>();
		
	}
    
    public AdminUser(Integer employeeID, String role) {
    	super();
    	this.employeeID = employeeID;
    	this.role = role;
    }


	// TO DO: Implement HIPAACompliantUser!
    // TO DO: Implement HIPAACompliantAdmin!
    
   
	public Integer getEmployeeID() {
		return employeeID;
	}


	public void setEmployeeID(Integer employeeID) {
		this.employeeID = employeeID;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


	public ArrayList<String> getSecurityIncidents() {
		return securityIncidents;
	}


	public void setSecurityIncidents(ArrayList<String> securityIncidents) {
		this.securityIncidents = securityIncidents;
	}


	public void newIncident(String notes) {
        String report = String.format(
            "Datetime Submitted: %s \n,  Reported By ID: %s\n Notes: %s \n", 
            new Date(), this.id, notes
        );
        securityIncidents.add(report);
    }
    public void authIncident() {
        String report = String.format(
            "Datetime Submitted: %s \n,  ID: %s\n Notes: %s \n", 
            new Date(), this.id, "AUTHORIZATION ATTEMPT FAILED FOR THIS USER"
        );
        this.securityIncidents.add(report);
    }

	
	@Override
	public boolean assignPin(int pin) {
		String numberString = Integer.toString(pin);
	    int count = numberString.length();
		if(count >= 6) {
			return true;
		}
		else {
			return false;
			}
	}

	@Override
	public boolean accessAuthorized(Integer confirmedAuthID) {
		if(this.employeeID == confirmedAuthID) {
			return true;
		}
		else {
			this.authIncident();
			return false;}
	}
    
	@Override
	public ArrayList<String> reportSecurityIncidents() {
		
		return securityIncidents;
	}

}