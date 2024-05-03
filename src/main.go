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
		"pages/about.go.html",
	}

	templates = template.Must(template.ParseFiles(pagePaths...))

	mux.HandleFunc("/", homeHandler)

	http.ListenAndServe(":8080", mux)
}

var templates *template.Template

func homeHandler(w http.ResponseWriter, r *http.Request) {
	templates.ExecuteTemplate(w, "layout", nil)
}

func aboutHandler(w http.ResponseWriter, r *http.Request) {
	templates.ExecuteTemplate(w, "layout", nil)
}
