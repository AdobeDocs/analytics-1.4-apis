# Anomaly Detection

Anomaly detection provides a statistical method to determine how a given metric has changed in relation to previous data.

To retrieve anomaly detection data, set `anomalyDetection` to true in [reportDescription](data_types/r_reportDescription.md#).

Data is returned in the following format for trended reports:

```json
{
  "name": "Tue. 31 Jul. YYYY",
  "year": YYYY,
  "month": 7,
  "day": 31,
  "counts": [
    "45"
  ],
  "upper_bounds": [
    "52"
  ],
  "lower_bounds": [
    "14"
  ],
  "forecasts": [
    "33"
  ],
  "breakdown_total": [
    "99"
  ]
}
```

data is returned in the following format for overtime reports:

```json
{
  "name": "Mon. 30 Jul. YYYY",
  "year": YYYY,
  "month": 7,
  "day": 30,
  "counts": [
    "45",
    "50.89"
  ],
  "upper_bounds": [
    "67",
    "43"
  ],
  "lower_bounds": [
    "44",
    "32"
  ],
  "forecasts": [
    "56",
    "54"
  ]
}
```

