import React, { useState, useEffect, useCallback, useRef } from "react";
import { Alert, Button, Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {YOUTUBE_API_KEY} from '@env';

const data = {
  "kind": "youtube#searchListResponse",
  "etag": "x9EryG7Ki0Lt5i9Oo_wabTy9tzE",
  "nextPageToken": "CAUQAA",
  "regionCode": "US",
  "pageInfo": {
    "totalResults": 494,
    "resultsPerPage": 5
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "9n1apblO_iUWGS1hDFx-LXYf0iE",
      "id": {
        "kind": "youtube#video",
        "videoId": "0t9yYL2Izqg"
      },
      "snippet": {
        "publishedAt": "2022-05-08T17:47:02Z",
        "channelId": "UCBSm_WnW5JYa4L3cMl9xSFQ",
        "title": "The Healing of Two Daughters - Luke 8:40-56",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/0t9yYL2Izqg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/0t9yYL2Izqg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/0t9yYL2Izqg/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Imago Dei Church",
        "liveBroadcastContent": "none",
        "publishTime": "2022-05-08T17:47:02Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "12w4aZ-JC-A7e3Oetd875UV9MrE",
      "id": {
        "kind": "youtube#video",
        "videoId": "XmZSHjcei-s"
      },
      "snippet": {
        "publishedAt": "2022-05-08T17:31:09Z",
        "channelId": "UCBSm_WnW5JYa4L3cMl9xSFQ",
        "title": "IDC 9:00 AM Livestream Service May 8, 2022",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/XmZSHjcei-s/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/XmZSHjcei-s/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/XmZSHjcei-s/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Imago Dei Church",
        "liveBroadcastContent": "none",
        "publishTime": "2022-05-08T17:31:09Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "ZMgj9lOssF3PFjoX5lANplHZsCQ",
      "id": {
        "kind": "youtube#video",
        "videoId": "v06XcAFqclg"
      },
      "snippet": {
        "publishedAt": "2022-05-01T17:46:14Z",
        "channelId": "UCBSm_WnW5JYa4L3cMl9xSFQ",
        "title": "Who Then Is This? - Luke 8:22-39",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/v06XcAFqclg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/v06XcAFqclg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/v06XcAFqclg/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Imago Dei Church",
        "liveBroadcastContent": "none",
        "publishTime": "2022-05-01T17:46:14Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "PaxuKhzvD_uFFySulbJC595T02c",
      "id": {
        "kind": "youtube#video",
        "videoId": "X1s2eAdRG50"
      },
      "snippet": {
        "publishedAt": "2022-05-01T17:29:46Z",
        "channelId": "UCBSm_WnW5JYa4L3cMl9xSFQ",
        "title": "IDC 9:00 AM Service May 1, 2022",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/X1s2eAdRG50/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/X1s2eAdRG50/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/X1s2eAdRG50/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Imago Dei Church",
        "liveBroadcastContent": "none",
        "publishTime": "2022-05-01T17:29:46Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "5aolx0ONAfFi5SsGqTLBv1p4F1g",
      "id": {
        "kind": "youtube#video",
        "videoId": "siupRGUIN-c"
      },
      "snippet": {
        "publishedAt": "2022-04-24T17:25:31Z",
        "channelId": "UCBSm_WnW5JYa4L3cMl9xSFQ",
        "title": "Be Careful How You Hear - Luke 8:4-21",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/siupRGUIN-c/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/siupRGUIN-c/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/siupRGUIN-c/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Imago Dei Church",
        "liveBroadcastContent": "none",
        "publishTime": "2022-04-24T17:25:31Z"
      }
    }
  ]
}

export default function Videos() {
  // const [videos, setVideos] = useState<any>([]);

  // useEffect(() => {
  //   fetch(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=UCBSm_WnW5JYa4L3cMl9xSFQ&part=snippet,id&order=date&maxResults=20`)
  //     .then(res => res.json())
  //     .then(res => { setVideos(res) })
  // }, []);

  return (
    <View style={styles.container}>
      {/* EXTRACT OUT LATER --> {data.items.forEach(video => <Video video={video} />)} */}
      <ScrollView
        // style={styles.scrollView}
        scrollEventThrottle={200}
        contentInset={{top: 0}}
      >
        {data && data.items && data.items.map((video: any, idx: number) => (
          <View key={idx} style={styles.video}>
            
            <TouchableOpacity style={{width: '100%', backgroundColor: '#ddd', alignItems: 'center', justifyContent: 'center'}} onPress={() => Linking.openURL(`http://www.youtube.com/watch?v=${video.id.videoId}`)}>
              <Image source={{ uri: video.snippet.thumbnails.high.url }} resizeMode="cover" style={{ width: 320, height: 180, borderRadius: 10 }} />
              <Text style={{fontWeight: 'bold', fontSize: '16px', padding: 10}}>{video.snippet.title}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  video: {
    flex: 1,
    borderTopWidth: 3,
    borderTopColor: '#aaa',
    backgroundColor: '#ddd',
    padding: 5,
  }
});
