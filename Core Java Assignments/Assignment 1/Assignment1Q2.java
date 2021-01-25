import java.util.ArrayList;

class ArmstrongNumBtwnRange{
    public int[] armstrongNumbersInRange(int min , int max)
	{
    	
        boolean b;
        ArrayList<Integer> myValues = new ArrayList<Integer>();
        
        for(int i = min;i<=max; i++)
		{
        	b = armstrongCheck(i);
            if(b == true)
			{
                myValues.add(i);
            }
        }
        
        int[] arr = myValues.stream().mapToInt(i -> i).toArray(); 
		return arr;
	}
	public boolean armstrongCheck(int num) {

		String s = String.valueOf(num);
		int size = s.length();
		int total = 0;
		int NUM = num;

		for (int i = 0; i < size; i++) {
			if (NUM > 0) {
				int temp = NUM % 10;
				total += Math.pow(temp, size);
				NUM = NUM / 10;
			}
		}
		if (num == total) {
			return true;
		} else {
			return false;
		}
	
    }
}

public class Assignment1Q2 {
    public static void main (String [] args) {

       int min = 100;int max = 999;
       
       ArmstrongNumBetweenRange myRange = new ArmstrongNumBetweenRange();
       
       for (int element: myRange.armstrongNumbersInRange(min,max)) {
           System.out.println(element);
       }

    }
}