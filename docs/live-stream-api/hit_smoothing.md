# Hit Smoothing

Hit smoothing buffers data to provide a smoothed rate of flow for messages. Hit smoothing is useful in several scenarios, such as when incoming to a live dashboard is coming in bursts or is unpredictable. In such cases, having the data smoothed provides a smoother look to the updates.

To enable hit smoothing, add a query string parameter `"smoothing=1"` to the end of the LiveStream connect URI. For example, if a LiveStream connect URI is:

```
https://livestream.adobe.net/api/1/stream/mystream1
```

The hit smoothing version would be:

```
https://livestream.adobe.net/api/1/stream/mystream1?smoothing=1
```

An algorithm to accomplishes hit smoothing. At first, the rate of flow is set to a low, constant rate. This allows hits to arrive in the bucket and for the rate to be observed. As more hits arrive in the bucket, the rate increases. The larger the size of the bucket, the more gradually the rate increases.

Generally, the larger bucket size, the smoother the messages are but the more latent the messages become. The smaller the bucket, the rates become more choppy, and the latency decreases. In our implementation \(unlike the traditional implementations for TCP networking\), the bucket never fills up. Rather, the rate of emitted messages increases correspondingly and no messages are dropped.

The bucket size is measured in seconds. To adjust the bucket size, set the `"smoothingBucketSize=<n>"` in the LiveStream connect URI.

n is a value \>= 1 and <= 7200 \(2 hours\).

If n is not specified, the default used is 270 seconds. For example, if you want to use a smoothing bucket size of 180 seconds, the URI would become:

```
https://livestream.adobe.net/api/1/stream/mystream1?smoothing=1&smoothingBucketSize=180
```

**Guidelines for Bucket Size \(n\)** 

If spikes come every x seconds \(for example, if x is 180 or 3 minutes\), a smoothing size of 1.5 \* x is acceptable \(180 \* 1.5 = 270\). You can experiment with the data from your LiveStream, and see what works best for your traffic patterns. Increase the bucket if dashboards get to choppy.

The graph below shows the rates of messages in a LiveStream feed both with smoothing enabled and smoothing disabled. In this case, the spikes come every 3 minutes \(see the blue, unsmoothed line\). The red line shows the rate of messages when smoothing is enabled, using a 270 second bucket size.

