import java.util.Scanner;

class ArmstrongOrNot {
    public boolean armstrongCheck(int n)
	{
    	int sum=0,backup = n;
    	while(n>0) {
    		int temp = n%10;
    		sum+=temp*temp*temp;
    		n = n/10;
    	};
    	if(sum == backup) {
    		return true;
    	}
		return false;
	}
}
public class Assignment1Q1 {

	public static void main(String[] args) 
	{
		
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		ArmstrongOrNot check = new ArmstrongOrNot();
		boolean res = check.armstrongCheck(n);
		System.out.println(res);
		scan.close();
	}

}