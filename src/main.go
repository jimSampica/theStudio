package main

import (
	"net/http"
	"text/template"
)

func main() {

	mux := http.NewServeMux()

	homeTemplate = template.Must(template.ParseFiles("pages/layout.html"))
	mux.HandleFunc("/", homeHandler)

	http.ListenAndServe(":80", mux)
}

var homeTemplate *template.Template

func homeHandler(w http.ResponseWriter, r *http.Request) {
	homeTemplate.Execute(w, page{PageTitle: "Hello World"})
}

type page struct {
	PageTitle string
}
