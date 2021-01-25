## Google stuff
**Project:** plastique-302800
**Service Account:** devops@plastique-302800.iam.gserviceaccount.com

download cdk from `https://cloud.google.com/sdk/docs/install` and place in your `~/` folder 

```
cd google-cloud-sdk
./install.sh

gcloud auth login
```

## Terraform Stuff
```
terraform import google_firebase_project.plastique plastique-302800
```