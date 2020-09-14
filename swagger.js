const swaggerDocument = {
    "openapi": "3.0.1",
    "info": {
      "title": "Football Clubs",
      "description": "APIs to manage football clubs",
      "contact": {
        "name": "Michael Westerby",
        "email": "m.j.westerby@gmail.com"
      },
      "version": "1.0.0"
    },
    "paths": {
      "/clubs": {
        "get": {
          "description": "Lists all clubs",
          "responses": {
            "200": {
              "description": "Success",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Clubs"
                  }
                }
              }
            },
            "404": {
              "description": "No clubs found"
            }
          }
        }
      },
      "/club/${id}": {
        "get": {
          "description": "List information about a specific club",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "schema": {
                "$ref": "#/components/schemas/id"
              },
              "required": true
            }
          ],
          "responses": {
            "200": {
              "description": "Success",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Club"
                  }
                }
              }
            },
            "404": {
              "description": "Club not found for provided id"
            }
          }
        },
        "put": {
          "description": "Adds or updates a club",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/NewClub"
                }
              }
            }
          },
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "schema": {
                "$ref": "#/components/schemas/id"
              },
              "required": true
            }
          ],
          "responses": {
            "200": {
              "description": "Success",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Club"
                  }
                }
              }
            },
            "400": {
              "description": "Invalid club provided"
            }
          }
        },
        "delete": {
          "description": "Deletes a club",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "schema": {
                "$ref": "#/components/schemas/id"
              },
              "required": true
            }
          ],
          "responses": {
            "200": {
              "description": "Success",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Club"
                  }
                }
              }
            },
            "404": {
              "description": "Club not found for provided id"
            }
          }
        }
      }
    },
    "components": {
      "schemas": {
        "Clubs": {
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/Club"
          }
        },
        "Club": {
          "type": "object",
          "properties": {
            "id": {
              "$ref": "#/components/schemas/id"
            },
            "name": {
              "$ref": "#/components/schemas/name"
            },
            "country": {
              "$ref": "#/components/schemas/country"
            },
            "eliminated": {
              "$ref": "#/components/schemas/eliminated"
            }
          }
        },
        "NewClub": {
          "type": "object",
          "properties": {
            "name": {
              "$ref": "#/components/schemas/name"
            },
            "country": {
              "$ref": "#/components/schemas/country"
            },
            "eliminated": {
              "$ref": "#/components/schemas/eliminated"
            }
          }
        },
        "id": {
          "type": "integer",
          "example": 1000
        },
        "name": {
          "type": "string",
          "example": "Liverpool"
        },
        "country": {
          "type": "string",
          "example": "England"
        },
        "eliminated": {
          "type": "boolean",
          "example": true
        }
      }
    }
  };

module.exports = swaggerDocument;