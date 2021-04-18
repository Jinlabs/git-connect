import requests
import sys

giturl = sys.argv[1]
giturl1 = sys.argv[2]

profile_id = ''

response=""
#scope: w_member_social,r_liteprofile
access_token = ''

url = "https://api.linkedin.com/v2/ugcPosts"

headers = {'Content-Type': 'application/json',
           'X-Restli-Protocol-Version': '2.0.0',
           'Authorization': 'Bearer ' + access_token}

def post(giturl,giturl1):
    
    post_data = {
        "author": "urn:li:person:"+profile_id,
        "lifecycleState": "PUBLISHED",
        "specificContent": {
            "com.linkedin.ugc.ShareContent": {
                "shareCommentary": {
                    "text": "Hey, I have made this Open Source Contribution 💻 . Do check out the github repository in which I have contributed by going through this link -"+giturl+"   and my pull request at this link -"+giturl1+"   ."
                },
                "shareMediaCategory": "NONE"
            }
        },
        "visibility": {
            "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
        }
    }
    return post_data

    
response = requests.post(url, headers=headers, json=post(giturl,giturl1))

print(response)

