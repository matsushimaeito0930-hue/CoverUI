package main

// import "fmt"

// func main() {
// 	fmt.Println("Hello, World!")
// }
import (
	"encoding/json"
	"net/http"
	"fmt"
)

func helloHandler(w http.ResponseWriter , r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{
		"message": "Hello, World!" ,
	})
}

func main() {
	http.HandleFunc("/hello", helloHandler)
	fmt.Println("Server starting on port 8080...")
	http.ListenAndServe(":8080", nil)
}