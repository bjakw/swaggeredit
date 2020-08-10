module.exports = {
  "openapi": "3.0.1",
  "info": {
    "title": "Damn Vulnerable API",
    "description": "So you think you can hack &#128526;  ?",
    "version": "0.1"
  },
  "servers": [
    {
      "url": "http://dvws.local"
    }
  ],
  "paths": {
    "/api/v2/notes/{ID}": {
      "delete": {
        "tags": [
          "Notes"
        ],
        "description": "Enter the ID of the Note you wish to delete",
        "responses": {
          "200": {
            "description": "Auto generated using Swagger Inspector",
            "content": {
              "application/json; charset=utf-8": {
                "schema": {
                  "type": "string"
                },
                "examples": {}
              }
            }
          }
        },
        "servers": [
          {
            "url": "http://dvws.local"
          }
        ],
        "parameters": [
          {
            "name": "ID",
            "in": "path",
            "description": "",
            "required": true,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "security": [
          {
            "Bearer": []
          }
        ]
      },
      "servers": [
        {
          "url": "http://dvws.local"
        }
      ]
    },
    "/api/v2/notes": {
      "post": {
        "tags": [
          "Notes"
        ],
        "description": "\"The type Parameter must be: 'note', 'reminder', 'list', 'secret', 'public'\"\n",
        "requestBody": {
          "content": {
            "application/json;charset=utf-8": {
              "schema": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string"
                  },
                  "body": {
                    "type": "string"
                  },
                  "type": {
                    "type": "string"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Auto generated using Swagger Inspector",
            "content": {
              "application/json; charset=utf-8": {
                "schema": {
                  "type": "string"
                },
                "examples": {}
              }
            }
          }
        },
        "servers": [
          {
            "url": "http://dvws.local"
          }
        ],
        "security": [
          {
            "Bearer": []
          }
        ]
      },
      "servers": [
        {
          "url": "http://dvws.local"
        }
      ]
    },
    "/api/v1/info": {
      "get": {
        "tags": [
          "Info"
        ],
        "description": "Get Info about the running api",
        "responses": {
          "200": {
            "description": "Auto generated using Swagger Inspector"
          }
        },
        "servers": [
          {
            "url": "http://dvws.local"
          }
        ],
        "security": [
          {
            "Bearer": []
          }
        ]
      },
      "servers": [
        {
          "url": "http://dvws.local"
        }
      ]
    },
    "/api/v2/login": {
      "post": {
        "tags": [
          "Login"
        ],
        "description": "Login with username and password",
        "requestBody": {
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/loginANDregister"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Auto generated using Swagger Inspector",
            "content": {
              "application/json; charset=utf-8": {
                "schema": {
                  "type": "string"
                },
                "examples": {}
              }
            }
          }
        },
        "servers": [
          {
            "url": "http://dvws.local"
          }
        ],
        "security": [
          {
            "Bearer": []
          }
        ]
      },
      "servers": [
        {
          "url": "http://dvws.local"
        }
      ]
    },
    "/api/v2/users": {
      "post": {
        "tags": [
          "Users"
        ],
        "description": "Create a new user",
        "requestBody": {
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/loginANDregister"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Auto generated using Swagger Inspector",
            "content": {
              "application/json; charset=utf-8": {
                "schema": {
                  "type": "string"
                },
                "examples": {}
              }
            }
          }
        },
        "servers": [
          {
            "url": "http://dvws.local"
          }
        ],
        "security": [
          {
            "Bearer": []
          }
        ]
      },
      "get": {
        "tags": [
          "Users"
        ],
        "description": "Get Info about all registered users",
        "responses": {
          "200": {
            "description": "Auto generated using Swagger Inspector",
            "content": {
              "application/json; charset=utf-8": {
                "schema": {
                  "type": "string"
                },
                "examples": {}
              }
            }
          }
        },
        "servers": [
          {
            "url": "http://dvws.local"
          }
        ],
        "security": [
          {
            "Bearer": []
          }
        ]
      },
      "servers": [
        {
          "url": "http://dvws.local"
        }
      ]
    },
    "/api/v2/users/checkadmin": {
      "get": {
        "tags": [
          "Users"
        ],
        "description": "Check if the current User is an admin",
        "responses": {
          "200": {
            "description": "Auto generated using Swagger Inspector",
            "content": {
              "application/json; charset=utf-8": {
                "schema": {
                  "type": "string"
                },
                "examples": {}
              }
            }
          }
        },
        "servers": [
          {
            "url": "http://dvws.local"
          }
        ],
        "security": [
          {
            "Bearer": []
          }
        ]
      },
      "servers": [
        {
          "url": "http://dvws.local"
        }
      ]
    },
    "/api/v2/notesearch": {
      "post": {
        "tags": [
          "Notesearch"
        ],
        "description": "Search for a Note by its Name",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/body"
              },
              "examples": {
                "0": {
                  "value": "{\"search\":\"search\"}"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Auto generated using Swagger Inspector",
            "content": {
              "application/json; charset=utf-8": {
                "schema": {
                  "type": "string"
                },
                "examples": {}
              }
            }
          }
        },
        "servers": [
          {
            "url": "http://dvws.local"
          }
        ],
        "security": [
          {
            "Bearer": []
          }
        ]
      },
      "servers": [
        {
          "url": "http://dvws.local"
        }
      ]
    }
  },
  "components": {
    "schemas": {
      "body": {
        "type": "object",
        "properties": {
          "search": {
            "type": "string"
          }
        }
      },
      "loginANDregister": {
        "type": "object",
        "properties": {
          "username": {
            "type": "string"
          },
          "password": {
            "type": "string"
          }
        }
      }
    },
    "securitySchemes": {
      "Bearer": {
        "type": "http",
        "scheme": "bearer",
        "description": "Enter your JWT"
      }
    }
  }
}
