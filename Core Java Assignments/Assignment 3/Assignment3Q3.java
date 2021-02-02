package Assignment3;

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

public class Assignment3Q3 {
	public static List traverseReverse(ArrayList nList) {
		List list = new ArrayList();

		ListIterator listIterator = nList.listIterator(nList.size());
		while (listIterator.hasPrevious()) {
			list.add(listIterator.previous());
		}
		return list;
	}

	public static void main(String[] args) {
		ArrayList<Integer> list = new ArrayList<>();

		list.add(2);
		list.add(4);
		list.add(6);
		list.add(8);
		list.add(10);
		list.add(12);

		traverseReverse(list);
		System.out.println(traverseReverse(list));

	}
}