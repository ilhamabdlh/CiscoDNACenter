package main
import (
    "net/http"

    "github.com/gin-gonic/gin"
)

type album struct {
	ID string `json:"id"`
	NetworkDevice string `json:"NetworkDevice"`
	WirelesClients string `json:"WirelesClients"`
	WiredClients string `json:"WiredClients"`
	P1 string `json:"P1"`
	P2 string `json:"P2"`
	Sites string `json:"Sites"`
	nDevice string `json:"nDevice"`
	nProfile string `json:"nProfile"`
	Image string `json:"Image"`
	CiscoDna string `json:"CiscoDna"`
}

var albums = []album{
	{ID: "1", NetworkDevice: "100", WirelesClients:"25", WiredClients:"100", P1:"0", P2:"0", Sites:"213", nDevice: "16", nProfile:"31", Image:"2", CiscoDna:"2"},
	{ID: "2", NetworkDevice: "100", WirelesClients:"28", WiredClients:"98", P1:"2", P2:"0", Sites:"214", nDevice: "15", nProfile:"32", Image:"3", CiscoDna:"2"},
	{ID: "3", NetworkDevice: "99", WirelesClients:"26", WiredClients:"100", P1:"0", P2:"1", Sites:"212", nDevice: "13", nProfile:"31", Image:"4", CiscoDna:"2"},
	{ID: "1", NetworkDevice: "100", WirelesClients:"25", WiredClients:"100", P1:"0", P2:"0", Sites:"215", nDevice: "14", nProfile:"33", Image:"5", CiscoDna:"2"},
	{ID: "2", NetworkDevice: "100", WirelesClients:"28", WiredClients:"98", P1:"2", P2:"0", Sites:"213", nDevice: "17", nProfile:"30", Image:"6", CiscoDna:"2"},
	{ID: "3", NetworkDevice: "99", WirelesClients:"26", WiredClients:"100", P1:"0", P2:"1", Sites:"217", nDevice: "15", nProfile:"31", Image:"7", CiscoDna:"2"},
	{ID: "1", NetworkDevice: "100", WirelesClients:"25", WiredClients:"100", P1:"0", P2:"0", Sites:"216", nDevice: "14", nProfile:"33", Image:"8", CiscoDna:"2"},
	{ID: "2", NetworkDevice: "100", WirelesClients:"28", WiredClients:"98", P1:"2", P2:"0", Sites:"212", nDevice: "13", nProfile:"34", Image:"9", CiscoDna:"2"},
	{ID: "3", NetworkDevice: "99", WirelesClients:"26", WiredClients:"100", P1:"0", P2:"1", Sites:"211", nDevice: "15", nProfile:"32", Image:"9", CiscoDna:"2"},
}

func getAlbums(c *gin.Context){
	c.IndentedJSON(http.StatusOK, albums)
}

func main(){
	router := gin.Default()
	router.GET("/albums", getAlbums)
	router.Run("localhost:8080")
}