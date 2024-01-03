package main

import (
	"net/http"
	"text/template"
)

func main() {

	mux := http.NewServeMux()

	mux.HandleFunc("/", homeHandler)

	http.ListenAndServe(":80", mux)
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	tmpl := template.Must(template.ParseFiles("pages/layout.html"))
	tmpl.Execute(w, page{PageTitle: "Hello World"})
}

type page struct {
	PageTitle string
}
