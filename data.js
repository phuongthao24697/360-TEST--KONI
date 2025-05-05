var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "FOYER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9664064928485434,
          "pitch": -0.21034471379734754,
          "rotation": 0,
          "target": "8-1f--family-area"
        },
        {
          "yaw": 0.9673943119016997,
          "pitch": -0.0596269007043837,
          "rotation": 3.141592653589793,
          "target": "1-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hallway",
      "name": "HALLWAY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4738282819409285,
          "pitch": 0.3860799293911228,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 2.3481679452318964,
          "pitch": 0.3492877740143854,
          "rotation": 0,
          "target": "5-powder-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-lounge-area",
      "name": "LOUNGE AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.953744852820245,
          "pitch": 0.098413787966388,
          "rotation": 1.5707963267948966,
          "target": "4-dry-kitchen"
        },
        {
          "yaw": 0.8095380971082733,
          "pitch": 9.66696944715295e-10,
          "rotation": 0,
          "target": "6-wet-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-dining",
      "name": "LIVING DINING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7527404043953876,
          "pitch": 0.019345744077318372,
          "rotation": 1.5707963267948966,
          "target": "1-hallway"
        },
        {
          "yaw": 0.7511663651462683,
          "pitch": 0.14536899212723853,
          "rotation": 2.356194490192345,
          "target": "4-dry-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dry-kitchen",
      "name": "DRY KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6347535555647852,
          "pitch": 0.0945929795938838,
          "rotation": 0,
          "target": "1-hallway"
        },
        {
          "yaw": -0.3911484425845835,
          "pitch": -0.03538663496992811,
          "rotation": 0,
          "target": "6-wet-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-powder-room",
      "name": "POWDER ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9629993100908738,
          "pitch": -0.08548080790365198,
          "rotation": 4.71238898038469,
          "target": "1-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-wet-kitchen",
      "name": "WET KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.585304677089022,
          "pitch": 0.1678249034744681,
          "rotation": 4.71238898038469,
          "target": "7-laundry"
        },
        {
          "yaw": 0.9687070519447012,
          "pitch": 0.10306947878889972,
          "rotation": 1.5707963267948966,
          "target": "4-dry-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-laundry",
      "name": "LAUNDRY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6559175042450143,
          "pitch": -0.058902418786427546,
          "rotation": 4.71238898038469,
          "target": "6-wet-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-1f--family-area",
      "name": "1F- FAMILY AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.25392014631593796,
          "pitch": -0.002849362678379208,
          "rotation": 4.71238898038469,
          "target": "9-1f--master-bedroom"
        },
        {
          "yaw": 1.3847557569324653,
          "pitch": 0.6742810206104402,
          "rotation": 2.356194490192345,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-1f--master-bedroom",
      "name": "1F- MASTER BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6906753285054101,
          "pitch": -0.002265881920894941,
          "rotation": 4.71238898038469,
          "target": "8-1f--family-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-1f--master-bedroom--tv-wall",
      "name": "1F- MASTER BEDROOM- TV WALL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.24810823716844688,
          "pitch": 0.0911218029551133,
          "rotation": 0,
          "target": "11-1f--master-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-1f--master-bathroom",
      "name": "1F- MASTER BATHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8800839193433205,
          "pitch": 0.14716157892910253,
          "rotation": 4.71238898038469,
          "target": "12-1f--wiw"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-1f--wiw",
      "name": "1F- WIW",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "13-1f--wiw-1",
      "name": "1F- WIW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0822924200016999,
          "pitch": 0.052793440183892315,
          "rotation": 0,
          "target": "11-1f--master-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-1f--sons-bedroom-1",
      "name": "1F- SON'S BEDROOM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.821605612816267,
          "pitch": -0.010030339657861376,
          "rotation": 0,
          "target": "8-1f--family-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-1f--sons-bedroom-2",
      "name": "1F- SON'S BEDROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5158353893759475,
          "pitch": 0.04482772376889521,
          "rotation": 0,
          "target": "8-1f--family-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
