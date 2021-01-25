provider "google" {
  credentials = file("CREDENTIALS_FILE.json")
  project     = "plastique-302800"
  region      = "us-west1"
}

resource "google_project" "default" {
  provider = google-beta

  project_id = "plastique-302800"
  name       = "plastique-302800"
}

resource "google_firebase_project" "plastique" {
  provider = google-beta
  project  = google_project.default.project_id
}

