import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import org.junit.jupiter.api.Test;

public class TestJson {
    @Test
    public void testJson(){
        int[][] cost = JSON.parseObject("0",new TypeReference<int[][]>(){});
        System.out.println(cost);
    }
}
