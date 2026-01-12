# body = [
#     {
#         "tag_name" : "h1",
#         "tag_content": "공미남",
#         "tag_style" : {
#             "color" : "blue"
#         }
#     },
#     {
#         "tag_name": "p",
#         "tag_content": "공욱재는 잘생겼다.",
#         "tag_style": {}
#     },
# ]

practics = {
    "left_angle_bracket" : "<",
    "right_angle_bracket" : ">",
    "tag_name" : "",
    "close_tag_slash" : "/",
    "children_elements": [],
}

l = practics["left_angle_bracket"]
r = practics["right_angle_bracket"]
c = practics["close_tag_slash"]

print(f"{l}공욱재{r} 나야 {l}{c}공욱재{r}")