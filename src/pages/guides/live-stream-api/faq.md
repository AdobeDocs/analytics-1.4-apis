# Frequently Asked Questions (FAQ)
Q: When initially connecting to a Livestream endpoint, how old will the data be that starts streaming?

A: Livestream will start streaming data collected at the time of the client's connection. In the case of a client disconnect/reconnect, data will be streamed from the point of disconnection. This only happens if the reconnection occurs within a few minutes of the disconnection.

Q: Is there a way to get older/newer data during an initial connection or reconnection?

A: The `reset` GET string parameter can be used to request old or new data. For example, `?reset=largest` will request only the newest data from the stream and will ignore data missed during reconnection. The `?reset=smallest` setting will start streaming the oldest data available and attempt to catch up to the present. 

Q: Is there latency between when an impression is collected by Adobe and when it appears in the Livestream.

A: Yes. This latency can range between 20 seconds and 5 minutes.

Q: Is there a way to compress the data coming from Livestream?

A: Yes. Livestream actually requires clients to support compression by default. By extension, its not possible to request uncompressed data from Livestream.

Q: What transfer encoding is used?

A: [Chunked Transfer Encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding) There can be more than one record per chunk, each record is separated by a CRLF. Many http client libraries handle chunked transfer encoding transparently, including: Apache-httpclient java.net.URLConnection Python and ruby HTTP clients libcurl

Q: Can I create multiple connections to the same stream?

A: Yes. Use the `maxConnections` GET string parameter. If multiple connections are created, data is multiplexed across each connection. Data is grouped by visitor IDs, but will be out of order. The `timestamp` field can be used to sort the hits. There is a maximum of 8 connections allowed.

Q: What happens if multiple/different clients connect to the same stream?

A: This is not recommended as multiplexing will cause each client to only receive part of the stream. If two instances of the same stream are required, its recommended that infrastructure on the client side be put in place to replicate data for other consumers.

Q: Are hits evenly distributed across multiple connections?

A: A best effort is made to evenly distribute hits. Because data is grouped by visitor ID, a visitor that produces a large volume of data can create differences in volumes for each client.

Q: How do I avoid receiving duplicate records?

A: The likelihood of receiving duplicate records increases during reconnect or when new clients connect to an existing stream. The `hit_id` column can be used to de-dup hits.

Q: What should I do with empty records?

A: Empty records are sometimes returned in the stream. These can be ignored.
