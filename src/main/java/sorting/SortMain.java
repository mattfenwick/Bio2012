package sorting;

import java.util.Arrays;
import java.util.List;

public class SortMain {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		List<Integer> ints = Arrays.asList(new Integer [] {1,21,3,-47});
		
		List<Integer> sorted = (new JavaSort()).sortIntegers(ints);
		
		for(Integer i : sorted) {
			System.out.println("int: " + i);
		}
	}

}
