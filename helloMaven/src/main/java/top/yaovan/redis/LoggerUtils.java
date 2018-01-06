package top.yaovan.redis;

import org.apache.log4j.Logger;

public class LoggerUtils {
    protected static Logger logger = Logger.getLogger(SerializeTranscoder.class);

    public static void error(Logger logger, String s) {
        logger.error(s);
    }
}
