package top.yaovan.utils;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.Map;


/**
 * @author xiangpeng
 */
public class HttpUtils {

    private static String getParams(Map<String,Object> params){
//        StringBuilder sb = new StringBuilder();
        String str = "";
        for(String key : params.keySet()){
            if(str.length()>0){
//                sb.append("&");
                str+="&";
            }
            str+=key + "="+ params.get(key);
//            sb.append(key);
//            sb.append("=");
//            sb.append(params.get(key));
        }
        return str;
//        return sb.toString();
    }

    /**
     * 向指定URL发送GET方法的请求
     * @param url 发送请求的URL
     * @param params 请求参数，请求参数应该是 name1=value1&name2=value2 的形式。
     * @return URL 所代表远程资源的响应结果
     */
    public static String sendGet(String url, Map<String,Object> params){
        String param = null;
        try {
            param = URLEncoder.encode(getParams(params),"UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        StringBuffer result = null;
        BufferedReader in = null;

        try {
            String urlNameString = url + "?" + param;
            URL realUrl = new URL(urlNameString);
            // 打开和URL之间的连接
            HttpURLConnection connection = (HttpURLConnection)realUrl.openConnection();
            // 设置通用的请求属性
//            connection.setRequestProperty("accept", "*/*");
            connection.setRequestProperty("connection", "Keep-Alive");
            connection.setRequestProperty("Content-Type", "application/json");
            connection.setRequestProperty("user-agent","Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1;SV1)");
            connection.setRequestMethod("GET");
            // 建立实际的连接
            connection.connect();
            int responseCode = connection.getResponseCode();
            // 定义 BufferedReader输入流来读取URL的响应
            InputStreamReader is = new InputStreamReader(connection.getInputStream());
            in = new BufferedReader(is);
            String line;
            result = new StringBuffer();
            while ((line = in.readLine()) != null) {
                result.append(line);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            //释放资源
            try {
                if (in != null) {
                    in.close();
                }
            } catch (Exception e) {
            }
        }
        return result.toString();
    }

}
