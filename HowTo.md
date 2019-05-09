SenseLogs How To
===

SenseLogs is a snappy log viewer for cloud developers who want an effortless way to find application errors and events.

## Features

- Real live tail of log events.
- Transparent downloading of AWS CloudWatch Logs.
- Automatic aggregation of log streams.
- Live updating of events in the background.
- Infinite smooth scrolling through log events.
- Fast log scanning. SenseLogs navigates through your logs 5x faster than the AWS console.
- Search and filter events with full text and powerful structured queries.
- SenseLogs queries data 10x faster than CloudWatch Insights.
- Cache log data in your browser, limited by size or date range.
- View and query events by date range with fast goto event by date and time.
- Smart log parsing &mdash; extracts fields from JSON and other comment log formats.
- Save and bookmark favorite log views.

## Getting Started

### Enter Your Cloud Credentials

To start using SenseLogs, you need to add an AWS cloud credential to enable read-only access to your AWS CloudWatch Logs.

Your credentials are stored locally, in your browser cache and accessible only to the SenseLogs application in your browser. The credentials are only provided to the AWS SDK running in your browser and are not transmitted or shared with any other party other than AWS.

![SenseLogs Add View Image](https://raw.githubusercontent.com/sensedeep/senselogs/master/images/cloud-add.png)


```
{
  "Version": "2012-10-17",
  "Statement": [{
      "Sid": "ReadOnlyAccess",
      "Action": [
          "logs:DescribeLogGroups",
          "logs:DescribeLogStreams",
          "logs:GetLogEvents"
      ],
      "Resource": "*",
      "Effect": "Allow"
  }]
}
```

This policy grants read-only access to get AWS logs and streams and get logs events.

When you enter your cloud credentials, you must also enter the AWS region containing your logs.

### Define Log Views

Once your credentials are added, SenseLogs will start discovering your Log groups in the background. But it will only download events for those logs for which you define a log view.

To create a view, navigate to https://senselogs.sensedeep.com/views/add. Once the view is created, SenseLogs will transparently download your log event data for that view in the background.

![SenseLogs Add View Image](https://raw.githubusercontent.com/sensedeep/senselogs/master/images/view-add.png)

You can specify a single log stream for the view or all log streams by using * as the stream name. When selecting all streams, SenseLogs will fetch event data from all streams and automatically aggregate the log event data and order by timestamp.

You can create multiple views for any one log group. For example, one view may display all events, while another may filter only critical errors.

### Log Viewer

From the home page, select the log view to display by clicking on the view card.

![SenseLogs Home Page Image](https://raw.githubusercontent.com/sensedeep/senselogs/master/images/home.png)

This will launch the viewer for that log view.

![SenseLogs Viewer Image](https://raw.githubusercontent.com/sensedeep/senselogs/master/images/viewer.png)

From the viewer, you can scroll forwards and backwards over log data. SenseLogs will transparently download log data as required for display.

The first and last log events are highlighted with a reverse grey background.

You can also drag the horizontal slider to position the view at the desired date. The start and end date pill buttons can be used to jump to the start and end of the event stream.

![SenseLogs Viewer Image](https://raw.githubusercontent.com/sensedeep/senselogs/master/images/viewer-position.png)

Event column widths can be resized by dragging the column separator in the title (only) to the desired width. Your changes will be saved uniquely for each view.

### View Options

From the viewer, you can modify view options by clicking on the view name at the top of the page. This will display a drop-down expansion panel of view and filtering options.

![SenseLogs Filter by Date Image](https://raw.githubusercontent.com/sensedeep/senselogs/master/images/viewer-filtering.png)

Changes made in the viewer are persisted to the view configuration.

#### Select Fields

Click the "Select Fields" button to select which event fields are displayed. When you add a field, it will be added to the right of existing fields. You can use this to re-order fields by removing and then re-adding in the desired order.

#### Filtering

You can filter a subset of events by specifying a filter critera to "Match" events, "Exclude" events or a combination of both.

#### Filter by Text

Events can be filtered by specifying a matching text pattern. SenseDeep performs full-text matching against all fields of the log event record. Text matches are performed with case-less comparisons.

#### Filter With Case

You can also perform case-sensitive event filtering by selecting "With Case".

#### Filter With Regular Expressions

Regular expressions (RE) allow powerful conditional event filtering. Enter your RE without leading or trailing slashes.

#### Filter With Structured Fields

If your event has structured data, you can use the SenseLogs query language to perform powerful conditional queries. The query language is based on familiar Javascript expressions with some additional operators. For example: the query:

    error == "critical" && account == "Acme Corp"

will select those events which have the "Error" column set to "critical" and the "Account" column set to "Acme Corp".

The query language supports the operators:
    + - * / ( ) ^ ! % == != < <= > >= ^= ^!= $= $!= << >> && || <> ><

These extension operators have the following meaning
    a ^= b     a starts with the string b
    a ^!= b    a does not start with the string b
    a $= b     a ends with the string b
    a $!= b    a does not end with the string b
    a >< b     a contains the string b
    a <> b     a does not contain the string b

Sub-expressions can be grouped with parenthesis and the boolean operators && and || can group conditional operands.

Regular expressions (delimited by slashes) may be used with the "==" and "!=" operators. The regular expression can be on either side of the operator.

The SenseLog query language understands the types: Numbers, Boolean, String literals, Regular Expressions and NUL.

#### Event Range

You can select a subset of log events to display via the event range slider. Drag the start and end markers to the desired times. If you click on the start or end mark labels, you can enter explicit dates and times.

Only event within the selected range will be displayed.

### Live Tail

SenseLogs will append new data if the "Live Tail" option is selected. If you are positioned at the end of the log, the viewer will scroll automatically to display the new events which will be highlighted with a temporary "flash" of those event rows.

### Thanks

Thanks for trying SenseLogs. Please let us know if there are enhancements that you would like to see in SenseLogs by emailing us at [dev@sensedeep.com](mailto:dev@sensedeep.com).
