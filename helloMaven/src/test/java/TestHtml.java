import org.junit.Test;
import top.yaovan.utils.HttpClientHelper;
import top.yaovan.utils.HttpUtils;

import java.util.HashMap;
import java.util.Map;

public class TestHtml {
    private String url = "http://172.16.0.69:8080/pay.do";
    @Test
    public void test(){
        Map<String,Object> params = new HashMap<>();
        params.put("body","购买钻石");
        params.put("amount","999");
        String result = HttpClientHelper.sendPost(url,params,"UTF-8");
//        String result= HttpClientHelper.httpClientGet(url,params,"UTF-8");
        System.out.println(result);
    }
}
