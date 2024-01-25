import java.util.HashMap;
import java.util.Set;
public class Hash{
    public static void main (String[] args){

        HashMap<String, String> trackList = new HashMap<String, String>();
        trackList.put("jabanak dhourouf","jabanak dhourouf w jit kathab elghala majabak");
        trackList.put("ya layam","ya layyam 3inik men 8alana");
        trackList.put("ghafi","w ana ghafi jabak menam ellil");
        trackList.put("goool ","rodrigo fama 7aja mana3rafch");
        String track = trackList.get("jabanak dhourouf") ;
        System.out.println(track);
        Set<String> keys = trackList.keySet();
        for(String key : keys) {
            System.out.println(key+" : "+trackList.get(key)); 
        }



    }
}