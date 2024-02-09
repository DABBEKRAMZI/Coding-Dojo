package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class Physician extends User implements HIPAACompliantUser {
	private ArrayList<String> patientNotes;
	private Integer id;
	// TO DO: Constructor that takes an IDcopy
	public Physician() {
		super();
		this.id=getId();
		// TODO Auto-generated constructor stub
	}

    // TO DO: Implement HIPAACompliantUser!
	
	public void newPatientNotes(String notes, String patientName, Date date) {
        String report = String.format(
            "Datetime Submitted: %s \n", date);
        report += String.format("Reported By ID: %s\n", this.id);
        report += String.format("Patient Name: %s\n", patientName);
        report += String.format("Notes: %s \n", notes);
        this.patientNotes.add(report);
    }

	

	public Physician(ArrayList<String> patientNotes) {
		super();
		this.patientNotes = patientNotes;
	}

	@Override
	public boolean assignPin(int pin) {
		// TODO Auto-generated method stub
		if (pin>=1000 && pin<=9999) return true;
		return false;
	}

	@Override
	public boolean accessAuthorized(Integer confirmedAuthID) {
		// TODO Auto-generated method stub
		if (confirmedAuthID ==this.id)return true;
		return false;
	}
	
    // TO DO: Setters & Getters
}
