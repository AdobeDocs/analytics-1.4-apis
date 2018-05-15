# Step 1: Define the XML Data Format for HTTP POST

 

The Data Insertion API processes only supported XML tags with HTTP POST data submissions. All other tags and values are ignored.

**Note:** View a list of all [supported XML tags](https://marketing.adobe.com/developer/documentation/data-insertion/r-supported-tags), along with their JavaScript and HTTP header variable equivalents.

The following code takes an object of name-value pairs and formats it within XML tags. The name of each data pair is the XML tag name and the Analytics property name. The value of each data pair is the Analytics property value.

For the Java code, the `rptSuiteID` and `visitorID` values, which you will learn about in the next section, are passed as arguments to the DataInsertion object.

For the PHP code, these properties are passed in the `dataArray` object.

**PHP Code** 

```
/** 
 *  format XML data for HTTP POST for Data Insertion API 
 *  @param $dataArray - an associative array containing the properties of the hit-level data beacon 
 */ 
function formatXML($dataArray){ 
    /* create opening XML elements */ 
    $xml = "\n"; 
    $xml .= "\n"; 
    $xml .= " 1.0\n"; 
    /* add elements for all of the hit properties */ 
    foreach($dataArray as $name=>$value){ 
   	 $xml .= " <$name>" . htmlentities($value) . "\n"; 
    } 
    /* close the XML request */ 
    $xml .= "\n"; 

    return $xml; 
}//end: formatXML 
?>
```

**Java Code** 

```
package com.omniture.api; 

import java.util.ArrayList; 
import java.util.Iterator; 

/* The DataInsertion class creates the XML formatted string for HTTP POST data. */ 
public class DataInsertion 
{ 
private String rptSuiteID             = null; 
            private String visitorID             = null; 
            private StringBuffer buff            = null; 
            private ArrayList request    = new ArrayList(); 

            public DataInsertion( String rsid, String vid ) 
            { 
                this.rptSuiteID         = rsid; 
                this.visitorID             = vid; 
            } 

            public String toString() 
            { 
                buff                    = new StringBuffer(); 
                buff.append( "\n" ); 
                buff.append( "\n" ); 
                buff.append( "1.0\n" ); 

                if( this.rptSuiteID != null ) 
                    buff.append( this.tagify( "reportsuiteid", this.rptSuiteID ) ); 

                if( this.visitorID != null ) 
                    buff.append( this.tagify( "visitorid", this.visitorID ) ); 

                    Iterator iter = this.request.iterator(); 

                    while( iter.hasNext() ) 
                    { 
                        buff.append( iter.next() ); 
                    } 
                    buff.append( "\n" ); 

                  return buff.toString(); 
                } 

                private String tagify( String name, String value ) 
                { 
                    return "<" + name + ">" + value + "\n"; 
                } 

                private String tagify( String name, char value ) 
                { 
                    return "<" + name + ">" + value + "\n"; 
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

**Parent topic:** [Data Insertion API Tutorial](c_Data_Insertion_Overview.md)

