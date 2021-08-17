# Sequential Data Requirements

 

To ensure accurate visit number values, visit counts, and event attribution on persisting variables, applications must send visitor data in sequential order for every visitor. Data for one visitor may be submitted before or between data for another visitor, but each visitor's data must be received by Adobe servers sequentially, based on the time-stamp of the hit.

In some situations, it is possible to see two hits with the same time-stamp. For example, two hits might have the same time-stamp if an auto-playing video fires during the same second that the page loads. If two hits for one visitor have the same time-stamp, and order matters for those hits \(one contains variables that should persist to the next one\), you can change the time-stamp of the second hit by one second so we sort the two correctly.

 

The Analytics data processing engine closes a visit after 30 minutes of inactivity. For time-stamped data, if the difference between time-stamps is greater than 30 minutes, the visit number is incremented and a new visit is counted.

