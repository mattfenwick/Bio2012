package sorting;

import java.util.List;

public interface Sorter {

    public List<Integer> sortIntegers(List<Integer> ints);
	
	public <T> List<T> sortItems(List<T> items);
	
	public String getName();
}
