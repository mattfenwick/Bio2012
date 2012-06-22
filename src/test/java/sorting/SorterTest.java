package sorting;

import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.Before;
import org.junit.Test;


public class SorterTest {

	private List<List<Integer>> ints = new ArrayList<List<Integer>>();
	
	@Before
	public void setUp() {
		  // 1: empty list
		this.ints.add(Arrays.asList(new Integer [] {}));
		  // 2: many identical elements
		this.ints.add(Arrays.asList(new Integer [] {1, 2, -1, 2, 1, 1, 1, 21, 16, 38, 1, 2, 2, 1, 1}));
		  // 3: sorted list
		this.ints.add(Arrays.asList(new Integer [] {Integer.MIN_VALUE, 21, 27, 32, 39, 40, 41, 42, 2342323, Integer.MAX_VALUE}));
		  // 4: reverse sorted list
		this.ints.add(Arrays.asList(new Integer [] {34345, 3223, 11, 0, -18, Integer.MIN_VALUE}));
		  // 5: 1 element list
		this.ints.add(Arrays.asList(new Integer [] {37}));
		  // 6: normal input list
		this.ints.add(Arrays.asList(new Integer [] {283423, 14, 343, 3443, 8888, -21, -888, 8888}));
    	  // 7: null
		this.ints.add(null);                			  
	}
	
	public static <T extends Comparable<T>> boolean isSortedAscending(List<T> items) {
		int i = 0;
		while(i < items.size() - 1) {
			T first = items.get(i);
			T second = items.get(i + 1);
			if(first.compareTo(second) > 0) {
				return false;
			}
			i++;
		}
		return true;
	}
	
	@Test
	public void testJavaSort() {
		Sorter s = new JavaSort();
		for(List<Integer> ints : this.ints) {
			List<Integer> sorted = s.sortIntegers(ints);
			if(ints != null) {
    			assertTrue("is it sorted?", isSortedAscending(sorted));
    			assertEquals("is its size the same?", sorted.size(), ints.size());
			} else {
				assertNull("null in, null out", sorted);
			}
		}		
	}
	
	@Test
	public void testMergeSort() {
		Sorter s = new MergeSort();
		for(List<Integer> ints : this.ints) {
			List<Integer> sorted = s.sortIntegers(ints);
			if(ints != null) {
    			assertTrue("is it sorted?", isSortedAscending(sorted));
    			assertEquals("is its size the same?", sorted.size(), ints.size());
			} else {
				assertNull("null in, null out", sorted);
			}
		}	
	}
	
	@Test
	public void testQuickSort() {
		Sorter s = new QuickSort();
		for(List<Integer> ints : this.ints) {
			List<Integer> sorted = s.sortIntegers(ints);
			if(ints != null) {
    			assertTrue("is it sorted?", isSortedAscending(sorted));
    			assertEquals("is its size the same?", sorted.size(), ints.size());
			} else {
				assertNull("null in, null out", sorted);
			}
		}	
	}

}

