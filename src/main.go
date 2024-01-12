package main

import (
	"net/http"
	"text/template"
)

func main() {

	mux := http.NewServeMux()

	pagePaths := []string{
		"pages/layout.go.html",
		"pages/home.go.html",
	}

	templates = template.Must(template.ParseFiles(pagePaths...))
	mux.HandleFunc("/", homeHandler)

	http.ListenAndServe(":8080", mux)
}

var templates *template.Template

func homeHandler(w http.ResponseWriter, r *http.Request) {
	templates.ExecuteTemplate(w, "layout", nil)
}

type page struct {
	PageTitle string
}
