package sorting;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class JavaSort implements Sorter {

	@Override
	public List<Integer> sortIntegers(List<Integer> ints) {
		if( ints == null ) {
			return null;
		}
		
		List<Integer> sortedList = new ArrayList<Integer>();
		for(Integer i : ints) {
			sortedList.add(i);
		}
		
		Collections.sort(sortedList);
		return sortedList;
	}

	@Override
	public <T> List<T> sortItems(List<T> items) {
		// TODO Auto-generated method stub
		return null;
	}
	
	public String getName() {
		return "JavaSort";
	}

}
