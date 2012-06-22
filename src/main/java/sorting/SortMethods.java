package sorting;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class SortMethods {

	private static final Sorter [] sorters = new Sorter [] {
		new JavaSort(),
		new MergeSort(),
		new QuickSort()
	};
	
	public static List<Sorter> getSorters() {
		return new ArrayList<Sorter>(Arrays.asList(sorters));
	}

}
