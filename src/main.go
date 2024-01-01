package main

import (
	"net/http"
	"os"
	"text/template"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	mux := http.NewServeMux()

	mux.HandleFunc("/", homeHandler)
	http.ListenAndServe(":"+port, mux)
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	tmpl := template.Must(template.ParseFiles("pages/home.html"))
	tmpl.Execute(w, nil)
}
