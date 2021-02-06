package Assignment4;

import java.util.*;

public class Assignment4Q7 {
	public static void main(String[] args) {

		HashMap<String, Integer> hashMap = new HashMap<>();
		hashMap.put("Liam", 1);
		hashMap.put("Louis", 2);
		hashMap.put("Niall", 3);
		hashMap.put("Harry", 4);

		Assignment4Q7 assign = new Assignment4Q7();

		System.out.println(assign.convertKeyValueToString(hashMap));

	}

	public String convertKeyValueToString(HashMap<String, Integer> map) {
		StringBuffer sb = new StringBuffer();
		for (Map.Entry<String, Integer> entry : map.entrySet()) {
			sb.append(entry.getKey());
			sb.append(entry.getValue());
		}
		return sb.toString();

		

	}
}