package org.dp.cg;

public class Customer {
	
	private int customerId;
	private String customerName;
	private long customerContact;
	private Address customerAddress;
	
	public int getCustomerId() {
		return customerId;
	}
	
	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}
	
	public String getCustomerName() {
		return customerName;
	}
	
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	
	public long getCustomerContact() {
		return customerContact;
	}
	
	public void setCustomerContact(long customerContact) {
		this.customerContact = customerContact;
	}
	
	public Address getCustomerAddress() {
		return customerAddress;
	}

	public void setCustomerAddress(Address customerAddress) {
		this.customerAddress = customerAddress;
	}
	
	public void details()
	{
		System.out.println("CustomerId is: "+getCustomerId()+",\nCustomer name is: "+getCustomerName()+",\nCustomer contact: "+getCustomerContact()+",\nCustomer Address is: "+getCustomerAddress().getStreet()+","+getCustomerAddress().getCity()+","+getCustomerAddress().getState()+","+getCustomerAddress().getZip()+","+getCustomerAddress().getCountry()+".");
	}

}
