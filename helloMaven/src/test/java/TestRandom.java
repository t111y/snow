import java.util.Map;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;

public class TestRandom {
    public TestRandom(){


        Random random = new Random();
        final Map<Long,Boolean> ids = new ConcurrentHashMap<>();
        for (int i=0;i<10;i++){
            new Thread(new Runnable() {
                public void run() {
                    while (true){

                        long id = random.nextInt();
                        if(ids.containsKey(id)){
                            System.out.println(id);
                        }
                        ids.put(id,true);
                    }
                }
            }).start();
        }
        while (true){
            System.out.println(ids.values().size());
            ids.clear();
            try {
                Thread.sleep(100000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
