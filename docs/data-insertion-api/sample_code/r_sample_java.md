# Data Insertion Sample \(Java\)

This Java sample illustrates how to use Java classes to send an XML request.

This example sets the IP address, page name, and custom variables.

```java
DataSubmission.java
package com.omniture;

import java.util.ArrayList;
import java.util.Iterator;

public class DataInsertion
{
    private String rptSuiteID             = null;
    private String visitorID             = null;
    private StringBuffer buff            = null;
    private ArrayList<String> request    = new ArrayList<String>();
   
    public DataInsertion( String rsid, String vid )
    {
       this.rptSuiteID         = rsid;
       this.visitorID             = vid;
    }
   
    public String toString()
    {
       buff                    = new StringBuffer();
       buff.append( "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" );
       buff.append( "<request>\n" );
       buff.append( "<sc_xml_ver>1.0</sc_xml_ver>\n" );
       
       if( this.rptSuiteID != null )
       buff.append( this.tagify( "reportsuiteid", this.rptSuiteID ) );
       
       if( this.visitorID != null )
       buff.append( this.tagify( "visitorid", this.visitorID ) );
       
       Iterator iter = this.request.iterator();
       
       while( iter.hasNext() )
       {
          buff.append( iter.next() );
       }
       buff.append( "</request>\n" );
       
       return buff.toString();
    }
    
    private String tagify( String name, String value )
    {
       return "<" + name + ">" + value + "</" + name + ">\n";
    }

    private String tagify( String name, char value )
    {
       return "<" + name + ">" + value + "</" + name + ">\n";
    }
   
    public void set( String tag, String value )
    {
       this.request.add( this.tagify(tag, value) );
    }
   
    public void set( String tag, char value )
    {
       this.request.add( this.tagify(tag, value) );
    }
   
}
```

## DataSubmission.java

```
package com.omniture;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

public class DataInsertionRequest
{
    public static void main(String[] args) throws Exception
    {
       DataInsertion di = new DataInsertion( "test", "123456" );
          di.set( "ipaddress", "127.0.0.1" );
          di.set( "pagename", "Test Page" );
          di.set( "channel", "Tests" );
          di.set( "prop1", "All" );
          di.set( "events", "event1" );
          di.set( "evar2", "Test Page" );
          di.set( "evar3", "Test Page" );
          di.set( "evar4", "Test Page" );
          di.set( "hier1", "Test|Test Page|All" );
       
          URL url = null;
             URLConnection urlConn         = null;
             DataOutputStream printout     = null;
             BufferedReader input        = null;
             String u            = "http://namespace.112.2o7.net/b/ss/ll/6";
             String tmp             = null;
       
             url = new URL( u );
             urlConn = url.openConnection();
             urlConn.setDoInput( true );
             urlConn.setDoOutput( true );
             urlConn.setUseCaches( false );
             urlConn.setRequestProperty( "Content-Type", "application/x-www-form-urlencoded" );

             printout             = new DataOutputStream(urlConn.getOutputStream());
          
             printout.writeBytes( di.toString() );
             printout.flush();
             printout.close();
   
             input         = new BufferedReader( new InputStreamReader( urlConn.getInputStream( ) ) );
       
             System.out.println( di );
             while( null != ( ( tmp = input.readLine() ) ) )
             {
                System.out.println( tmp );
             }
             printout.close();
             input.close();
    }

}
```

**Parent topic:** [Sample Code](../sample_code/c_sample_code.md)

