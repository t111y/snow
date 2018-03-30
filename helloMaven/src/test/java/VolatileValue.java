import org.junit.Test;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class VolatileValue {
    private static long _id = 0;
    public synchronized static long getId(){
        return ++_id;
    }

    @Test
    public void volatileValue(){
        final Map<Long,Boolean> ids = new ConcurrentHashMap<>();
        for (int i=0;i<10;i++){
            new Thread(new Runnable() {
                public void run() {
                    while (true){
                        long id = VolatileValue.getId();
                        if(ids.containsKey(id)){
                            System.out.println(id);
                        }
                        ids.put(id,true);
                    }
                }
            }).start();
        }
        while (true){
//            System.out.println(ids.values().size());
            ids.clear();
            try {
                Thread.sleep(1);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
