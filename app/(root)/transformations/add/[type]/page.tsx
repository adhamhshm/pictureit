import Header from "@/components/shared/Header"
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const AddTransformationPage = async ({ params: { type } }: SearchParamProps) => {
    
    const { userId } = auth();
    const transformation = transformationTypes[type];

    // check id userId is present / if user is signed in
    if (!userId) {
        redirect("/sign-in");
    }

    // from clerk auth, we get clerk userId
    // then use that value, to get the real userId from database
    const user = await getUserById(userId);

    return (
        <>
            <Header 
                title={transformation.title}
                subtitle={transformation.subTitle}
            />
            
            <section className="mt-10">
                <TransformationForm 
                    action="Add"
                    userId={user._id}
                    type={transformation.type as TransformationTypeKey}
                    creditBalance={user.creditBalance}
                />
            </section>
        </>
    )
}

export default AddTransformationPage;