import org.junit.Assert;
import org.junit.Test;

import java.util.HashSet;
import java.util.Set;

public class TestSet {
    private Set<Integer> a = new HashSet<>();
    @Test
    public void t1(){
        a.add(1);
        a.add(1);
        Assert.assertTrue(a.size()==1);
    }
}
